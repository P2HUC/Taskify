import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST() {
  try {
    const email = "guest@z-up.com";
    const password = "GuestPassword123!";

    // 1. Try to find the user in Clerk
    let user;
    const usersResult = await clerkClient.users.getUserList({
      emailAddress: [email],
    });
    const users = Array.isArray(usersResult) ? usersResult : ((usersResult as any).data || []);

    if (users.length > 0) {
      user = users[0];
    } else {
      // 2. Create the guest user if it doesn't exist
      user = await clerkClient.users.createUser({
        emailAddress: [email],
        password: password,
        firstName: "Guest",
        lastName: "User",
      });
    }

    // 3. Ensure the guest user has an organization workspace
    const membershipsResult = await clerkClient.users.getOrganizationMembershipList({
      userId: user.id,
    });
    const memberships = Array.isArray(membershipsResult) ? membershipsResult : ((membershipsResult as any).data || []);

    let organizationId;

    if (memberships.length > 0) {
      organizationId = memberships[0].organization.id;
    } else {
      // Create a default organization for the guest user
      const org = await clerkClient.organizations.createOrganization({
        name: "Guest Workspace",
        createdBy: user.id,
      });
      organizationId = org.id;
    }

    // 4. Create a sign-in token for the user to bypass passwords / client trust
    const tokenResult = await clerkClient.signInTokens.createSignInToken({
      userId: user.id,
      expiresInSeconds: 300, // 5 minutes
    });

    return NextResponse.json({
      success: true,
      token: tokenResult.token,
      organizationId,
    });
  } catch (error: any) {
    console.error("GUEST_SETUP_ERROR", error);
    return NextResponse.json(
      { error: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

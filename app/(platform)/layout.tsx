import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { AiAssistant } from "@/components/ai-assistant";

const PlatformLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryProvider>
      <ModalProvider />
      {children}
      <AiAssistant />
    </QueryProvider>
  );
};

export default PlatformLayout;

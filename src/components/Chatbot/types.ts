export type Step = 'initial' | 'testing' | 'integration' | 'success' | 'pending';
export type IntegrationMethod = 'code' | 'email' | null;

export const DUMMY_CODE = `<script>
  window.CHATBOT_CONFIG = {
    apiKey: 'your-api-key',
    organizationId: 'your-org-id'
  };
</script>
<script src="https://cdn.example.com/chatbot.js"></script>`;

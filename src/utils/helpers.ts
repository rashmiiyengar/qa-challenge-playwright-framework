export async function generateRandomEmail(): Promise<string> {
    const timestamp = new Date().getTime();
    return `test-${timestamp}@example.com`;
  }
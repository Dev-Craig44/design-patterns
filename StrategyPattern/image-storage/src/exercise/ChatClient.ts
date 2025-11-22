import { EncryptionAlgorithm } from "./interface/EcryptionAlgorithm";

export class ChatClient {
  private encryptionAlgorithm: EncryptionAlgorithm;

  constructor(encryptionAlgorithm: EncryptionAlgorithm) {
    this.encryptionAlgorithm = encryptionAlgorithm;
  }

  public send(message: string): void {
    const encryptedMessage = this.encryptionAlgorithm.encrypt(message);
    console.log(`sending message: ${encryptedMessage}`);
  }
}

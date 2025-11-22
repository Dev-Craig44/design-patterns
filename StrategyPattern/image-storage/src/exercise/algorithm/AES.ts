import { EncryptionAlgorithm } from "../interface/EcryptionAlgorithm";

export class AESEncryption implements EncryptionAlgorithm {
  encrypt(message: string): string {
    return `AES(${message})`;
  }
}

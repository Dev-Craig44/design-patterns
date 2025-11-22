import { EncryptionAlgorithm } from "../interface/EcryptionAlgorithm";

export class DESEncryption implements EncryptionAlgorithm {
  encrypt(message: string): string {
    return `DES(${message})`;
  }
}

import { AESEncryption } from "./algorithm/AES";
import { DESEncryption } from "./algorithm/DES";
import { ChatClient } from "./ChatClient";

const client = new ChatClient(new AESEncryption());
client.send("Hello World");
// Easy to switch algorithms:
const desClient = new ChatClient(new DESEncryption());
desClient.send("Secret Message");

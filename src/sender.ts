import { Console } from 'console';
import { create, Whatsapp, Message, SocketState } from 'venom-bot';

class Sender {
    private client: Whatsapp

    constructor() {
        this.initialize()
    }
    async sendText(to: string, body: string) {
        // (11) 978514434 -> Não aceita 
        // 5511978514434@c.us -> formato que aceita  
        this.client.sendText(to, body)
    }

    private initialize() {
        const qr = (base64Qrimg: string) => {}
        
        const status = (statusSession: string) => {}

        const start = (client: Whatsapp) => {
            this.client = client

            this.sendText("5511954905715@c.us", "Olá testando Venom API WhatsApp")
        }

        create("lanches", qr, status)
        .then((client) => start(client))
        .catch((error) => console.error(error))
    }
}

export default Sender
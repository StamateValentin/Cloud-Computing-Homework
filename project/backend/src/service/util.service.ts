export class UtilService {
    static generateRandomString(length: number = 32) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    static removeArrayFromOtherArray(source: any[] | undefined, arr: any[]) {
        if (source === undefined) {
            return source;
        }

        return source.filter(el => !arr.includes(el));
    }
}
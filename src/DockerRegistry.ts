export default class DockerRegistry {
    private url: string;
    private port:number; 
    private username:string;
    private password:string;
    private ignoreSslErrors:boolean;

    constructor(url: string, port:number, username:string, password:string, ignoreSslErrors:boolean) {
        this.url = url;
        this.port = port;
        this.username = username;
        this.password = password;
        this.ignoreSslErrors = ignoreSslErrors;
        
    }

    test() {
        return false;
    }
}

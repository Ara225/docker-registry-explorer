import fetch from 'node-fetch';

export default class DockerRegistry {
    private url: string;
    private port:number; 
    private username:string;
    private password:string;
    private ignoreSslErrors:boolean;
    private isHttps:boolean;

    constructor(url="localhost", port=5000, username="", password="", ignoreSslErrors=true, isHttps=true) {
        this.url = url;
        this.port = port;
        this.username = username;
        this.password = password;
        this.ignoreSslErrors = ignoreSslErrors;
        this.isHttps = isHttps;
    }

    private async makeRegistryRequest() {
        let result = await fetch();
        return false;
    }

    test() {
        return false;
    }
}

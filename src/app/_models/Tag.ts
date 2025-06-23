export class Tag {
    static readonly HTMLCSS = new Tag('HTML+CSS', 'salmon');
    // static readonly CSS = new Tag('CSS', 'orange');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'darkred');
    static readonly ANGULAR = new Tag('Angular', 'indianred');
    static readonly PYTHON = new Tag('Python', 'green');
    static readonly JAVA = new Tag('Java', 'teal');
    static readonly LINUX = new Tag('Linux', 'brown');
    static readonly RASPBERRY = new Tag('Raspberry', 'peru');
    static readonly ANDROID = new Tag('Android', 'violet');
    static readonly OPENCV = new Tag('Open CV', 'olive');
    static readonly TESTING = new Tag('Testing', 'darkblue');
    static readonly COLLABORATION = new Tag('Collaboration', 'MediumVioletRed');
    static readonly REACT = new Tag('React', 'SeaGreen');
    static readonly SQLITE = new Tag('SQLite', 'SaddleBrown');
    private constructor (private readonly key: string, public readonly color: string){

    }
    toString() {
        return this.key
    }
}

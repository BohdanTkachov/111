export class MasterPageViewModel {
    name: string;
    blocks: MasterPageBlockViewModel[] = [];
    errors: string[] = [];


    Initialize(viewModel: MasterPageViewModel) {
        this.name = viewModel.name;
        this.blocks = viewModel.blocks;
        this.errors.length = 0;
        console.log(`Initialize page '${this.name}'`, this.blocks);
    }

    AddError(text: string) {
        this.errors.push(text);
    }

    HasError(): boolean {
        return this.errors.length > 0;
    }
}

export class MasterPageBlockViewModel {
    name: string;
    vm: any;
    offsetBottomMobile: number;
    offsetBottomDesktop: number;
    backgroundColor: string;

    constructor(name: string, viewModel: any, offsetBottomMobile: number, offsetBottomDesktop: number, backgroundColor: string) {
        this.name = name;
        this.vm = viewModel;
        this.offsetBottomMobile = offsetBottomMobile;
        this.offsetBottomDesktop = offsetBottomDesktop;
        this.backgroundColor = backgroundColor;
    }

    Is(name: string): boolean {
        return this.name === name
    }
}
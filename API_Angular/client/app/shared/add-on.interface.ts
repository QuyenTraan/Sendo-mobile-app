export interface IAddOnComponent {
    getState(): { name: string, value: any };
}
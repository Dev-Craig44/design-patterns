export declare abstract class WindowBase {
    closeWindow(): void;
    protected abstract beforeClose(): void;
    protected abstract afterClose(): void;
    private close;
}

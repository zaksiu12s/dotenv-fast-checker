export interface EnvChecker {
    check(name: string, type: StringConstructor): string | undefined;
    check(name: string, type: NumberConstructor): number | undefined;
    check(name: string, type: BooleanConstructor): boolean | undefined;
    check(name: string, type?: StringConstructor | NumberConstructor | BooleanConstructor): string | boolean | number | undefined;
}

declare const EnvChecker: EnvChecker;
export default EnvChecker;

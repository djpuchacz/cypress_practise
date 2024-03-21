import "./commands/getByTestId";

declare global {
    namespace Cypress {
        interface Chainable {
            getByTest: typeof getByTestId;
        }

    }
}
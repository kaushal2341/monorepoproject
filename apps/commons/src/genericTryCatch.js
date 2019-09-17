export default {
    genericTryCatch: async (executionMethod) => {
        try {
            const response = await executionMethod;
            return response;
        } catch (error) {
            // console.error(error);
        }
    }
}
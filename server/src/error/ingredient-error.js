const AppError = require("./AppError");

const ERROR_PREFIX = "ingredient/";

const Add = {
  UC_CODE: `${ERROR_PREFIX}add/`,

  InvalidDtoIn: class extends AppError {
    constructor(error) {
      const code = `${Add.UC_CODE}invalidDtoIn`;
      const message = "DtoIn is not valid.";
      const status = 400;

      super(code, message, status);

      this.error = error;
    }
  },

  CreateDaoFailed: class extends AppError {
    constructor(error) {
      const code = `${Add.UC_CODE}createDaoFailed`;
      const message = "Ingredient create dao failed";
      const status = 500;

      super(code, message, status);

      this.error = error;
    }
  },
};

const Edit = {
  UC_CODE: `${ERROR_PREFIX}edit/`,

  InvalidDtoIn: class extends AppError {
    constructor(error) {
      const code = `${Edit.UC_CODE}invalidDtoIn`;
      const message = "DtoIn is not valid.";
      const status = 400;

      super(code, message, status);

      this.error = error;
    }
  },

  UpdateDaoFailed: class extends AppError {
    constructor(error) {
      const code = `${Edit.UC_CODE}updateDaoFailed`;
      const message = "Ingredient update dao failed";
      const status = 500;

      super(code, message, status);

      this.error = error;
    }
  },

  IngredientDoesNotExist: class extends AppError {
    constructor(error) {
      const code = `${Edit.UC_CODE}ingredientDoesNotExist`;
      const message = "Ingredient with this id does not exist";
      const status = 404;

      super(code, message, status);

      this.error = error;
    }
  },
};

const Delete = {
  UC_CODE: `${ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends AppError {
    constructor(error) {
      const code = `${Delete.UC_CODE}invalidDtoIn`;
      const message = "DtoIn is not valid.";
      const status = 400;

      super(code, message, status);

      this.error = error;
    }
  },

  DeleteDaoFailed: class extends AppError {
    constructor(error) {
      const code = `${Delete.UC_CODE}deleteDaoFailed`;
      const message = "Ingredient delete dao failed";
      const status = 500;

      super(code, message, status);

      this.error = error;
    }
  },

  FindAllRecipesByIdDaoFailed: class extends AppError {
    constructor(error) {
      const code = `${Delete.UC_CODE}findAllRecipesByIdDaoFailed`;
      const message = "Ingredient find all recipes by id dao failed";
      const status = 501;

      super(code, message, status);

      this.error = error;
    }
  },

  IngredientDoesNotExist: class extends AppError {
    constructor(error) {
      const code = `${Delete.UC_CODE}ingredientDoesNotExist`;
      const message = "Ingredient with this id does not exist";
      const status = 404;

      super(code, message, status);

      this.error = error;
    }
  },

  IngredientReferencedInRecipes: class extends AppError {
    constructor(error) {
      const code = `${Delete.UC_CODE}ingredientReferencedInRecipes`;
      const message = "Ingredient is referenced in recipes";
      const status = 405;

      super(code, message, status);

      this.error = error;
    }
  },
};

module.exports = {
  Add,
  Edit,
  Delete,
};

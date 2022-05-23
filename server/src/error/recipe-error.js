const AppError = require("./AppError");

const ERROR_PREFIX = "recipe/";

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

  IngredientsAreNotUnique: class extends AppError {
    constructor(error) {
      const code = `${Add.UC_CODE}ingredientsAreNotUnique`;
      const message = "Each ingredient has to be only once in the recipe";
      const status = 400;

      super(code, message, status);

      this.error = error;
    }
  },

  IngredientDoesNotExist: class extends AppError {
    constructor(error) {
      const code = `${Add.UC_CODE}ingredientDoesNotExist`;
      const message = "One or more ingredient does not exist";
      const status = 400;

      super(code, message, status);

      this.error = error;
    }
  },

  CreateDaoFailed: class extends AppError {
    constructor(error) {
      const code = `${Add.UC_CODE}createDaoFailed`;
      const message = "Recipe create dao failed";
      const status = 500;

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

  RecipeDoesNotExist: class extends AppError {
    constructor(error) {
      const code = `${Delete.UC_CODE}recipeDoesNotExist`;
      const message = "Recipe with this id does not exist.";
      const status = 404;

      super(code, message, status);

      this.error = error;
    }
  },

  DeleteDaoFailed: class extends AppError {
    constructor(error) {
      const code = `${Delete.UC_CODE}deleteDaoFailed`;
      const message = "Recipe delete dao failed";
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

  IngredientsAreNotUnique: class extends AppError {
    constructor(error) {
      const code = `${Edit.UC_CODE}ingredientsAreNotUnique`;
      const message = "Each ingredient has to be only once in the recipe";
      const status = 400;

      super(code, message, status);

      this.error = error;
    }
  },

  RecipeDoesNotExist: class extends AppError {
    constructor(error) {
      const code = `${Edit.UC_CODE}recipeDoesNotExist`;
      const message = "Recipe with this id does not exist.";
      const status = 404;

      super(code, message, status);

      this.error = error;
    }
  },

  IngredientDoesNotExist: class extends AppError {
    constructor(error) {
      const code = `${Edit.UC_CODE}ingredientDoesNotExist`;
      const message = "One or more ingredient does not exist";
      const status = 400;

      super(code, message, status);

      this.error = error;
    }
  },

  UpdateDaoFailed: class extends AppError {
    constructor(error) {
      const code = `${Edit.UC_CODE}updateDaoFailed`;
      const message = "Recipe update dao failed";
      const status = 500;

      super(code, message, status);

      this.error = error;
    }
  },
};

const Get = {
  UC_CODE: `${ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends AppError {
    constructor(error) {
      const code = `${Get.UC_CODE}invalidDtoIn`;
      const message = "DtoIn is not valid.";
      const status = 400;

      super(code, message, status);

      this.error = error;
    }
  },

  RecipeDoesNotExist: class extends AppError {
    constructor(error) {
      const code = `${Get.UC_CODE}recipeDoesNotExist`;
      const message = "Recipe with this id does not exist";
      const status = 404;

      super(code, message, status);

      this.error = error;
    }
  },
};

module.exports = {
  Add,
  Delete,
  Edit,
  Get,
};

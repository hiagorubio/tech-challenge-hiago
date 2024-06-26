import { getDb } from "../../../../shared/application/adapters/out/mongo-db";
import { COLLECTION_NAMES_ENUM } from "../../../../shared/domain/collection-names";
import { updateProductMongo } from "../../../application/adapters";
import { UpdateProductBody } from "../../../application/adapters/in/schemas/admin.products.schemas";
import { ProductSchema } from "../../model/product";

export const updateProduct = async (product: UpdateProductBody) =>
  updateProductMongo(product);

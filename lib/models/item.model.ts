import { Money } from "./money.model"

/**
 * Class Item
 *
 */
export class Item
{
  private readonly name: string
  private readonly sku: string
  private readonly quantity: number
  private readonly price: Money
  private readonly category: string
  private subCategory!: Array<string>
  private readonly brand: string
  private gtin!: string

  /**
   * @param name: string
   * @param sku: string
   * @param quantity : number
   * @param price: number
   * @param category: string
   * @param brand: string
   */
  constructor(name: string, sku: string, quantity: number, price: Money, category: string, brand: string) {
    this.name = name
    this.sku = sku
    this.quantity = quantity
    this.price = price
    this.category = category
    this.brand = brand
  }

  public setSubCategory(categories: Array<string>): Item {
    this.subCategory = categories
    return this
  }

  /**
   * @param gtin Global Trade Item Number. One of [UPC, EAN, JAN, ISBN, ITF-14]
   */
  public setGtin(gtin: string): Item {
    this.gtin = gtin
    return this
  }

  public getName(): string
  {
    return this.name
  }

  public getSku(): string
  {
    return this.sku
  }

  public getQuantity(): number
  {
    return this.quantity
  }

  public getPrice(): Money
  {
    return this.price
  }

  public getCategory(): string
  {
    return this.category
  }

  public getSubCategory(): Array<string>|null
  {
      return this.subCategory
  }

  public getBrand(): string
  {
    return this.brand
  }

  public getGtin(): string|null
  {
    return this.gtin
  }
}

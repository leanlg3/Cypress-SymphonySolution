class HomePage {

    getSortContainer(){
        return cy.get('select[data-test="product_sort_container"]');
    }

    getSortActiveOption(){
        return cy.get('.active_option');
    }
    
    getInventoryItemName(){
        return cy.get('div.inventory_item_name');
    }

    checkItemsSorted(){
        cy.get(
            this.getInventoryItemName().then(($itemNames) => {
              const itemNames = $itemNames.toArray().map((el) => el.textContent);
      
              // Check if the item names are in descending order
              const sortedItemNames = [...itemNames].sort((a, b) =>
                b.localeCompare(a)
              );
              expect(itemNames).to.deep.equal(sortedItemNames);
            })
          );
    }
}

export default HomePage;
// class ProductVariant {
//   constructor() {
//     // Color elements
//     this.colorVariantOptions = [
//       ...document.querySelectorAll(`input[name='Color']`),
//     ];
//     this.colorVariantLabels = this.colorVariantOptions.map(
//       (input) => input.nextElementSibling
//     );

//     // Size elements
//     this.sizeVariant = document.querySelector(`select[name='options[Size]']`);
//     this.sizeVariantOptions = [...document.querySelectorAll("option")];

//     // Changing variant value
//     this.sizeVariant.addEventListener(
//       "change",
//       this.#updateSelectedSizeVariant.bind(this)
//     );
//   }

//   #updateSelectedSizeVariant() {
//     this.sizeVariantOptions.forEach((option) => {
//       option.removeAttribute("selected");
//       if (this.sizeVariant.value === option.value) {
//         option.setAttribute("selected", "selected");
//       }
//     });
//   }
// }

// new ProductVariant();

// Copyright (c) 2023, Maxim Sysoev and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Med Consumables Request", {
// 	refresh(frm) {

// 	},
// });
function ReCalcSumAndTotal(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    row.sum = row.coast * row.count;
    row.total = row.sum + row.vat;
    frm.refresh_field('consumables');
}
frappe.ui.form.on("Med Consumables Table", "count", ReCalcSumAndTotal);
frappe.ui.form.on("Med Consumables Table", "coast", ReCalcSumAndTotal);
frappe.ui.form.on("Med Consumables Table", "vat", ReCalcSumAndTotal);
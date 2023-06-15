// Copyright (c) 2023, Maxim Sysoev and contributors
// For license information, please see license.txt

function ReCalcSumAndTotal(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    row.sum = row.coast * row.count;
    row.total = row.sum + row.vat;
    frm.refresh_field('incoming');
}
frappe.ui.form.on("Med Incoming Table", "count", ReCalcSumAndTotal);
frappe.ui.form.on("Med Incoming Table", "coast", ReCalcSumAndTotal);
frappe.ui.form.on("Med Incoming Table", "vat", ReCalcSumAndTotal);
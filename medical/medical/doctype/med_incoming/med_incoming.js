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

frappe.ui.form.on('Med Incoming', {
    refresh(frm) {
        frm.set_query('recive_by', function () {
            return { filters: { 'enterprise': frm.doc.reciver } };
        });
    }
});
frappe.ui.form.on('Med Incoming', {
    refresh(frm) {
        frm.set_query('transfer_by', function () {
            return { filters: { 'enterprise': frm.doc.provider } };
        })
    }
});
frappe.ui.form.on('Med Incoming', {
    provider: function (frm) {
        frm.set_query('transfer_by', function () {
            return { filters: { 'enterprise': frm.doc.provider } };
        });
    }
});

frappe.ui.form.on('Med Incoming', {
    reciver: function (frm) {
        frm.set_query('recive_by', function () {
            return { filters: { 'enterprise': frm.doc.reciver } };
        });
    }
});
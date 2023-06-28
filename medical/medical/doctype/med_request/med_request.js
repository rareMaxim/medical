// Copyright (c) 2023, Maxim Sysoev and contributors
// For license information, please see license.txt

frappe.ui.form.on("Med Request", {
    refresh(frm) {
        // console.log(frm);
        //  console.log(frappe);
        frm.doc.date = frm.doc.creation;
    },
});


function ReCalcSumAndTotal(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    row.sum = row.coast * row.count;
    row.total = row.sum + row.vat;
    frm.refresh_field('drugs');
}
frappe.ui.form.on("Med Incoming Table", "count", ReCalcSumAndTotal);
frappe.ui.form.on("Med Incoming Table", "coast", ReCalcSumAndTotal);
frappe.ui.form.on("Med Incoming Table", "vat", ReCalcSumAndTotal);

frappe.ui.form.on('Med Request', {
    status: function (frm) {
        console.log(frm.doc.status);

        frm.set_query("title", "drugs", function (doc, cdt, cdn) {
            let d = locals[cdt][cdn];
            console.log(d);
            console.log(frm.doc.status);
            if (frm.doc.status != '') {
                return {
                    filters: [
                        ['Med Incoming Name', 'status', '=', frm.doc.status]
                    ]
                };
            } else {
                return {
                    filters: []
                };
            }
        });

    },
});

// Copyright (c) 2023, Maxim Sysoev and contributors
// For license information, please see license.txt

frappe.ui.form.on("Med Enterprise", {
    refresh(frm) {
        frm.add_custom_button(__('Створити'), function () {
            frappe.route_options = {
                enterprise: frm.doc.name,
            };
            frappe.new_doc("Med Enterprise User");
        },__('Відповідальна особа'));
        if (frm.doc.type == 'Заклад охорони здоров’я') {
            frappe.route_options = {
                health_care_facility: frm.doc.name,
            };
            frm.add_custom_button(__('Медичні засоби'), function () {
                frappe.new_doc("Med Request");
            }, __('Додати потребу'));
        }
    },
});

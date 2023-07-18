frappe.listview_settings['Med Incoming Name'] = {
    onload: function (listview) {
        listview.page.add_menu_item(__("Fix Naming"), function () {
            frappe.call({
                method: 'medical.medical.doctype.med_incoming_name.med_incoming_name.concat_trade_and_source',
                callback: function () {
                    listview.refresh();
                    frappe.msgprint("Оновлення завершено");
                }

            });
        })
    }
};
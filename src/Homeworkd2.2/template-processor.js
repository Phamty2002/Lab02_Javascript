
class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dict) {
        var filled = this.template;
        for (const key in dict) {
            filled = filled.replace(new RegExp('\{\{' + key + '\}\}', 'g'), dict[key]);
        }
        // Replace all placeholders that were not in the dict with empty string
        filled = filled.replace(new RegExp('\{\{\w+\}\}', 'g'), '');
        return filled;
    }
}

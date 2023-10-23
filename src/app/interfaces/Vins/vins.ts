export module Vin {
    export interface client {
        mark:           string;
        catalog_code:   number;
        model:          string;
        family:         string;
        ssd:            string;
        param:          string;
        modification:   string;
        group:          string;
        subgroup:       string;
        universal_classifier:   string;
        vin:            string;
        frame:          string;
    }

    export const client: client = {
        mark: "",
        catalog_code: 0,
        model: "",
        family: "",
        ssd: "",
        param: "",
        modification: "",
        group: "",
        subgroup: "",
        universal_classifier: "",
        vin: "",
        frame: ""
    }

    export interface model  {
        brand:      string;
        model:      string;
        Region:     string;
        link:       string;
        family:     string;
        "Vehicle Type": string;
        "Engine Type": string;
    }

    export const model: model = {
        brand: "",
        model: "",
        Region: "",
        link: "",
        family: "",
        "Vehicle Type": "",
        "Engine Type": ""
    }

    export interface tree {
        
    }
}
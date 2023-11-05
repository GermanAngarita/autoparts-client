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

    export interface model_info {
        "catalog code":                            string;
        "weather type":                            string;
        transaxle:                                 string;
        "engine type":                             string;
        fuel:                                      string;
        body:                                      string;
        capacity:                                  string;
        steering:                                  string;
    }

    export const model_info: model_info = {
        "catalog code": "",
        "weather type": "",
        transaxle: "",
        "engine type": "",
        fuel: "",
        body: "",
        capacity: "",
        steering: ""
    }

    export interface tree {
        
    }

    export interface node {
        node_name: string;
        node_descr: string;
        node_applicability: string;
        node_id: string;
        image: string;
    }

    export interface treeBranch {
        [key: string]: treeDetails;
    }

    export interface treeDetails {
        name: string;
        image: string;
        branch?: treeBranch;
        nodes?: Array<node>;
    }
}
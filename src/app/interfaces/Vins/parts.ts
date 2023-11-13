export module Parts {
    export interface Root {
        parts: Part[]
        image: string[]
        coord: Coord[][]
        part_name: string
        node_desc: any
        node_applicability: any
    }

    export const Root: Root = {
        parts: [],
        image: [],
        coord: [],
        part_name: "",
        node_desc: undefined,
        node_applicability: undefined
    }
    
    export interface Part {
        standart: Standart
        add: Add
    }
    
    export interface Standart {
        part_number: string
        part_code: string
        part_name: string
        part_quantity: string
        node_link: string
        type: string
    }
    
    export interface Add {
        info: string
        applicability: string
    }
    
    export interface Coord {
        name: string
        "margin-top": number
        "margin-left": number
        width: number
        height: number
    }
}
  
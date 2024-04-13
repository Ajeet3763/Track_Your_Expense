import { useState } from "react"


export function UseFilter(dataList, callBackFun) {
    const [query, setQuery] = useState('')
console.log(callBackFun)
    const filteredData = dataList.filter((data) => {
        return callBackFun(data).toLowerCase().includes(query)
    })
    return [filteredData, setQuery]
}

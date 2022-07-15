// @chacra-ui/react の extendThemeを利用して
// グローバルに適応したいテーマを設定
import { extendTheme } from "@chakra-ui/react"

// extendTheme を利用して、アプリ全体に適応されるグローバルなテーマを定義
const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "orange.50",
                color: "gray.800",
            },
            p: {
                fontSize: { base: "md", md: "lg" },
                lineHeight: "tall"
            }
        }
    }
})

export default theme
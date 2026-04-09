import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

type CardProps = {
    title: string,
    value: number | string
}

const KpiCards = ({title, value}: CardProps) => {
  return (
    <Card className="flex-1 flex justify-center">
        <CardHeader>
            <CardTitle className="text-center">
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-center">{value}</p>
        </CardContent>
    </Card>
  )
}

export default KpiCards
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import BadgeComponent from "../badges/BadgeComponent"

const orders = [
    {
        id: 2,
        orderId: 2,
        Products: 30,
        amount: 3000,
        status: 'Completed'
    },
    {
        id: 3,
        orderId: 2,
        Products: 30,
        amount: 3000,
        status: 'Completed'
    },
    {
        id: 4,
        orderId: 2,
        Products: 30,
        amount: 3000,
        status: 'Completed'
    },
    {
        id: 5,
        orderId: 2,
        Products: 30,
        amount: 3000,
        status: 'Completed'
    },
    {
        id: 6,
        orderId: 2,
        Products: 30,
        amount: 3000,
        status: 'Completed'
    },
]

const TableComponent = () => {
  return (
    <div className="rounded-md border">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.slice(0, 5).map((order) => (
                    <TableRow key={order.id}>
                        <TableCell>#{order.id}</TableCell>
                        <TableCell>{order.orderId}</TableCell>
                        <TableCell>{order.Products}</TableCell>
                        <TableCell>${order.amount}</TableCell>
                        <TableCell>
                            <BadgeComponent status={order.status}></BadgeComponent>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default TableComponent
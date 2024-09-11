

export const metadata = {
    title: "Panel Web-site",
    description: "This is the website's demo panel"
}

export default function DashboardLayout({
    children,
}:{ children: React.ReactNode }){
    return(
        <>
            <h3>Header do dashboard</h3>
            <br/>
            {children}
        </>
    )
}
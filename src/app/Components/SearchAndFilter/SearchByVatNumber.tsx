interface VatnumberProps {
    setSerchVatNumber: (value: string) => void
    serchVatNumber: string
}
const SearchByVatNumber:React.FC<VatnumberProps> = ({serchVatNumber , setSerchVatNumber}) => {
    return (
        <div>
            <h1 className="mb-2">VAT Number</h1>
            <input
                type="text"
                value={serchVatNumber}
                onChange={(e) => setSerchVatNumber(e.target.value)}
                className="px-2 py-2 border border-border rounded-md w-full outline-none"
                placeholder="Search your page..."
            />
        </div>
    );
};

export default SearchByVatNumber;
interface SearchProps {
    setSearchCompanyName: (value: string) => void;
    searchCompanyName: string;
}

const SearchByCompanyName: React.FC<SearchProps> = ({ searchCompanyName, setSearchCompanyName }) => {
    return (
        <div>
            <h1 className="mb-2">Company Name</h1>
            <input
                type="text"
                value={searchCompanyName}
                onChange={(e) => setSearchCompanyName(e.target.value)}
                className="px-2 py-2 border border-border rounded-md w-full outline-none"
                placeholder="Search your page..."
            />
        </div>
    );
};

export default SearchByCompanyName;

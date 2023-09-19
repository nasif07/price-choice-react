import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

    const priceOptions = [
        {
            "id": "1",
            "membership_type": "Basic",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free weights area",
                "Cardio machines",
                "Fitness assessment"
            ]
        },
        {
            "id": "2",
            "membership_type": "Premium",
            "price": 49.99,
            "features": [
                "All Basic membership features",
                "Group fitness classes",
                "Sauna and steam room access",
                "Personal trainer consultation",
                "Nutrition workshops"
            ]
        },
        {
            "id": "3",
            "membership_type": "Ultimate",
            "price": 79.99,
            "features": [
                "All Premium membership features",
                "24/7 gym access",
                "Towel service",
                "Nutritional counseling",
                "Massage therapy sessions"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map((option) => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
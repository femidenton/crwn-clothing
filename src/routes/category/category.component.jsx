import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoryContainer, Title } from './category.styles';


const Category = () => {
    const { category } = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])
    
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    
    return (
        <>
            <Title>{ category.toUpperCase()} </Title>
            <CategoryContainer>
                { //safeguard  beacuse component renders asynchronously fetched data. renders only if the actual data is present  
                products && products.map((product)=> <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        
        </>
    )
}

export default Category
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts as fetchProducts, addNewProduct } from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    options: {
      staleTime: 1000 * 60,
    }
  });
  
  const addProduct = useMutation({
    mutationFn: ({ product, url }) => addNewProduct(product, url),
    options: {
      onSuccess: () => queryClient.invalidateQueries(['products']),
    }
  });

  return { productsQuery, addProduct };
}

// THIS IS SHOP PAGE

import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { newArrivalsData, relatedProductData, topSellingData } from "../page";
import ProductCard from "@/components/common/ProductCard";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious, 
  PaginationEllipsis 
} from "@/components/ui/pagination";

const ShopPage: React.FC = () => {
  const combinedProducts = [
    ...relatedProductData.slice(1, 4), 
    ...newArrivalsData.slice(1, 4), 
    ...topSellingData.slice(1, 4),
  ];

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex flex-col w-full space-y-5">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
            </div>
            <div className="flex flex-col sm:items-center sm:flex-row">
              <span className="text-sm md:text-base text-black/60 mr-3">
                Showing 1-10 of 100 Products
              </span>
              <div className="flex items-center">
                Sort by:
                <Select defaultValue="most-popular">
                  <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="most-popular">Most Popular</SelectItem>
                    <SelectItem value="low-price">Low Price</SelectItem>
                    <SelectItem value="high-price">High Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {combinedProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
          
          <hr className="border-t-black/10" />

          {/* Pagination */}
          <Pagination className="justify-between">
            <PaginationPrevious href="#" className="border border-black/10" />
            <PaginationContent>
              {[1, 2, 3].map((page) => (
                <PaginationItem key={page} className={page > 3 ? "hidden lg:block" : ""}>
                  <PaginationLink 
                    href="#" 
                    className="text-black/50 font-medium text-sm"
                    isActive={page === 1}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis className="text-black/50 font-medium text-sm" />
              </PaginationItem>
              {[8, 9, 10].map((page) => (
                <PaginationItem key={page} className={page === 9 ? "hidden sm:block" : "hidden lg:block"}>
                  <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
            <PaginationNext href="#" className="border border-black/10" />
          </Pagination>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;

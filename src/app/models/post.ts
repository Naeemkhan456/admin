export interface Post {
    Category: {
      category_name: string;
    };
    created_at: string;
    created_by: {
      email: string;
      last_name: string;
      id: string;
      first_name: string;
      username: string;
    };
    description: string;
    ipAddress: string;
    image: string;  
    metaDescription: string;  
    metaImage: string; 
    metaTitle: string;  
    subCategory?: {
      sub_category_name: string;
      Category: string;
      id: string;
    };
    tags?: {
      tag_name: string;
      id: string;
    }[]; 
    title: string; 
}

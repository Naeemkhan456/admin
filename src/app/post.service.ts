import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private apollo: Apollo) {}

  getAllPosts(search: string, limit: number, page: number) {
    return this.apollo.query({
      query: gql`
        query GetAllPostWithSearch($search: String!, $limit: Int, $page: Int) {
          getAllPostWithSearch(search: $search, limit: $limit, page: $page) {
            slider {
              ipAddress
              Category {
                category_name
                created_at
                id
              }
            }
            posts {
              Category {
                category_name
              }
              created_at
              created_by {
                email
                last_name
                id
                first_name
                username
              }
              description
              ipAddress
              subCategory {
                sub_category_name
                Category
                id
              }
              image
              metaDescription
              metaImage
              metaTitle
              tags {
                tag_name
                id
              }
              title
            }
            categories {
              _id
              count
            }
            tags {
              id
              tag_name
              created_at
            }
          }
        }
      `,
      variables: {
        search,
        limit,
        page,
      },
    });
  }
}

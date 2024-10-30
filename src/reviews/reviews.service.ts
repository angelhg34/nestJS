import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {

  constructor(@InjectRepository(Review)
  private reviewRepository:Repository<Review>){

  }

  create(payload: any) {
    const newReview=this.reviewRepository.create(payload)
    return this.reviewRepository.save(newReview);
  }

  findAll() {
    return this.reviewRepository.find();
  }

  findOne(id: number) {
    return this.reviewRepository.findOneBy({id});
  }

  async update(id: number, payload: any) {
    const updReview= await this.reviewRepository.findOneBy({id});
    this.reviewRepository.merge(updReview,payload)
    return this.reviewRepository.save(updReview)
  }

  async remove(id: number) {
    const delReview= await this.reviewRepository.findOneBy({id});
    this.reviewRepository.delete(delReview)
    return delReview
  }
}

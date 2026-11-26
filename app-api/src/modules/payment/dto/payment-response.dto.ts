import { ApiProperty } from '@nestjs/swagger';

export class PaymentResponseDto {
  @ApiProperty({
    example: '121213144141-2131sd',
  })
  id!: string;

  @ApiProperty({
    example: 'order-123',
  })
  orderId!: string;

  @ApiProperty({
    example: 99.99,
  })
  amount!: number;

  @ApiProperty({
    example: 'user-123',
  })
  userId!: string;

  @ApiProperty({
    example: 'USD',
  })
  currency!: string;

  @ApiProperty({
    example: 'COMPLETED',
    enum: ['PENDING', 'FAILED', 'COMPLETED', 'CANCELLED'],
  })
  status!: string;

  @ApiProperty({
    example: 'STRIPE',
    nullable: true,
  })
  paymentMethod!: string | null;

  @ApiProperty({
    example: 'pi_131344141',
    nullable: true,
  })
  transactionId!: string | null;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}

export class CreatePaymentIntentResponse {
  @ApiProperty({
    example: 'pi_12131312',
    description: 'Stripe client secret for payment confirmation',
  })
  clientSecret!: string;

  @ApiProperty({
    example: '231212-312-sd12133131',
    description: 'Payment ID in database',
  })
  paymentId!: string;
}

export class CreatePaymentIntentApiResponseDto {
  @ApiProperty({
    example: true,
  })
  success!: boolean;

  @ApiProperty({
    type: CreatePaymentIntentResponse,
  })
  data!: CreatePaymentIntentResponse;

  @ApiProperty({
    example: 'Payment intent created successfully',
    required: false,
  })
  message?: string;
}

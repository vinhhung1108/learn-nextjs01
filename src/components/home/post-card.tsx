import { Date } from '@/components/common'
import { Post } from '@/models'
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'

export interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>
        <Stack sx={{ my: 2 }} direction="row">
          <Typography variant="body2">
            <Date dateString={post.publishedDate} />
          </Typography>
          <Divider flexItem orientation="vertical" sx={{ mx: 2 }} />
          <Typography variant="body2">{post.tagList.join(', ')}</Typography>
        </Stack>
        <Typography variant="body1">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}

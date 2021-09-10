import React, { useState, useEffect, useCallback, useRef, } from 'react';
import { View, FlatList, Platform, ViewToken, ViewabilityConfig } from 'react-native';

import { Stories } from '../../components/Stories';
import { LazyImage } from '../../components/LazyImage';
import { Loading } from './styles';
import { Post } from '../../components/Post';

interface iOnViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

interface iAuthorData {
  id: number;
  name: string;
  avatar: string;
}

export interface iFeedData {
  id: number
  legend: string
  image: string
  small: string
  aspectRatio: number
  description: string
  authorId: number
  author: iAuthorData;
}

export const Feed: React.FC = () => {
  const [feed, setFeed] = useState<iFeedData[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState<number[]>([]);

  const loadPage = useCallback(async (pageNumber = page, shouldRefresh = false) => {
    if (total && pageNumber > total) return;

    setIsLoading(true);

    const response = await fetch(
      `${Platform.OS === "ios" ? 'http://localhost:3333' : 'http://10.0.2.2:3333'}/feed?_expand=author&_limit=5&_page=${pageNumber}`,
    );

    const data = await response.json();
    const totalItems = response.headers.get('X-Total-Count');

    setTotal(Math.floor(Number(totalItems) / 5));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
    setIsLoading(false);
  }, [total, page])

  const refreshList = useCallback(async () => {
    setRefreshing(true);
    await loadPage({
      pageNumber: 1,
      shouldRefresh: true
    });
    setRefreshing(false);
  }, [])


  const viewabilityConfigRef = useRef<ViewabilityConfig>({ itemVisiblePercentThreshold: 50, })

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }: iOnViewableItemsChanged) => {
    if (changed && changed.length > 0) {
      setViewable(changed.map(({ item }: { item: iFeedData }) => item.id));
    }
  }, [])

  useEffect(() => {
    loadPage()
  }, []);

  return (
    <View>
      <FlatList<iFeedData>
        data={feed}
        keyExtractor={post => String(post.id)}
        onEndReached={() => loadPage()}
        ListHeaderComponent={Stories}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        viewabilityConfig={viewabilityConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged}
        ListFooterComponent={isLoading ? <Loading /> : <></>}
        renderItem={({ item }) => (
          <Post
            item={item}
            image={
              <LazyImage
                shouldLoad={viewable.includes(item.id)}
                aspectRatio={item.aspectRatio}
                smallSource={{ uri: item.small }}
                source={{ uri: item.image }}
              />
            }
          />
        )}
      />
    </View>
  );
}

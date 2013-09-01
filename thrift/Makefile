# Makefile for compiling thrift with require.js compatibility

THRIFT = thrift

FLAGS = -o ../js --gen

SRCS = tutorial.thrift shared.thrift

OBJS = ../js/gen-js/tutorial_types.js

all: tutorial

tutorial: $(SRCS)
	$(THRIFT) $(FLAGS) js:require tutorial.thrift

clean:
	rm -f $(OBJS)

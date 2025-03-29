---
## title : Components
---

# Custom Components!!!!

## Accordion

아코디언은 Wrapper 와 Sub Item 으로 구성됨
Sub Item 은 #header , #body 슬롯을 가지고 있으며 제목과 본문을 각각의 태그 아래 줄띄움, 들여쓰기 없이 같은 라인에 맞춰서 작성한다.

Wrapper 는 type, defaultValue 속성을 가지고 있다.

- type (single | `multiple`) : 동시에 여러개의 아코디언이 열릴수 있는지 결정
- defaultValue `string` : 디폴트로 오픈하고자하는 Sub Item 을 지정함. (Sub Item 의 value 값과 일치해야함)

Sub Item 은 value 속성을 가지고 있다. Wrapper 의 defaultValue 와 pair 로 작동함. 또한 중요한 기능으로 Sub Item 을 식별하는 key 역할을 수행함. 입력하지 않으면 자동으로 식별자를 생성함. (==> defaultValue 로 지정하는 경우 이외에는 지정하지 않는걸 권고함.)

::AccoWrapper{type="multiple"}

::AccoItem
#header
속성 설정 없는 기본적인 형태

#body
샘플코드

---

```java
::AccoWrapper
::AccoItem
#header
속성 설정 없는 기본적인 형태

#body
여기에 작성하고 하는 본문내용을 작성함.
::

::AccoItem
#header
샘플1

#body
예제로 작업한 내용임
::
::
```

---

샘플코드 끝
::

::AccoItem
#header
샘플1

#body
예제로 작업한 내용임
::
::

- 속성지정 예시 ( 두번째 아코디어인 오픈되어 있음. 한번에 하나씩만 오픈됨)

::AccoWrapper{type="single" defaultValue="openItem"}

::AccoItem
#header
속성지정한 형태

#body
샘플 코드

```java
::AccoWrapper{type="single"  defaultValue="openItem"}

::AccoItem
#header
속성 설정 없는 기본적인 형태

#body
샘플 코드
::

::AccoItem{value="openItem"}
#header
샘플2

#body
예제로 작업한 내용임
::

::
```

::

::AccoItem{value="openItem"}
#header
샘플2

#body
예제로 작업한 내용임
::

::

## Badge

```java
::AccoWrapper{type="single"  defaultValue="openItem"}

::AccoItem
#header
속성 설정 없는 기본적인 형태

#body
샘플 코드
::

::AccoItem{value="openItem"}
#header
샘플2

#body
예제로 작업한 내용임
::

::
```

::Badge
샘플코드
::

## Alert

##### solid

::alert{type="info", title="zzzzz"}
info
::

::alert{type="success"}
::

::alert{type="warning"}
::

::alert{type="error"}
::

::alert{type="secondary"}
::

::alert{type="primary"}
::

##### subtle

::alert{type="info", variant="subtle"}
info
::

::alert{type="success", variant="subtle"}
::

::alert{type="warning" variant="subtle"}
::

::alert{type="error" variant="subtle"}
::

::alert{type="secondary" variant="subtle"}
::

::alert{type="gof"}
::

::alert{type="gofinv" variant="solid"}
::

::alert{type="gofhead"}
::

::alert{type="gofinv"}
::

::AlertDanger{variant="solid" title="solid" desc=" variant: solid"}
::

::AlertDanger{variant="outline" title="outline" desc=" variant: outline"}
::

::AlertDanger{variant="soft" title="soft" desc=" variant: soft"}
::

::AlertDanger{variant="subtle" title="subtle" desc=" variant: subtle"}
::

## Collapsable

## Badge

::badge{text="second"}
::

asdfasdfas :badge{text="third"}

:badge

:badge{text="third"}

## Chip

::chip
::

## Toast
